import React, {
  FormEvent,
  useState,
  useRef,
  useEffect,
} from 'react';
import validator from 'validator';
import UrlhistoryLine from './components/urlHistoryLine';
import {
  useCreateUrlMutation,
} from './graphql/url.generated';
import { Url } from './graphql';
import addHostname from './utils/addHostname';

function App() {
  const errorRef = useRef<HTMLDivElement>(null);
  const localUrls = localStorage.getItem('urls');
  const [urls, setUrls] = useState((localUrls ? JSON.parse(localUrls) : []) as Url[]);
  const [newUrl, setNewUrl] = useState({ value: '' });
  const [urlError, setUrlError] = useState({ error: '' });
  const [generateUrl] = useCreateUrlMutation();

  useEffect(() => {
    localStorage.setItem('urls', JSON.stringify(urls));
  }, [urls]);

  useEffect(() => {
    if (errorRef.current) {
      errorRef.current.classList.add('opacity-0');
      setTimeout(() => {
        setUrlError({ error: '' });
      }, 2000);
    }
  }, [urlError]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUrl({ value: e.target.value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validator.isURL(newUrl.value)) {
      setUrlError({ error: 'Please check your link and try again' });

      return;
    }

    if (newUrl.value) {
      const result = await generateUrl({ variables: { url: newUrl.value } });

      if (!result.data) {
        setUrlError({ error: 'Generation failed, please try again' });

        return;
      }

      setUrls([
        ...urls,
        {
          ...result.data.generateUrl,
          clicks: [],
        },
      ]);
      setNewUrl({ value: addHostname(result.data.generateUrl.shortUrl) });
    }
  };

  return (
    <section className="mx-auto bg-red-200 py-8">
      <div
        className="w-1/2 mx-auto flex flex-col gap-6 items-center rounded-2xl min-w-max"
      >
        <div className="font-semibold w-full">
          <form
            className="flex gap-4"
            onSubmit={onSubmit}
          >
            <input
              data-cy="messageInput"
              placeholder="Shorten your link"
              className="p-3 w-3/4 border-2 rounded-2xl border-main-blue"
              value={newUrl.value}
              onChange={onChange}
            />
            <button
              type="submit"
              className="p-3 w-1/4 bg-main-blue text-white rounded-2xl"
            >
              Shorten
            </button>
          </form>
        </div>
        { urlError.error && <div ref={errorRef} className="w-full bg-red-400 p-3 rounded-2xl text-white text-center transition-opacity duration-1000 delay-1000">{urlError.error}</div> }
        <div className="w-full rounded-2xl bg-white">
          <ul className="divide-y">
            {urls.map((url) => (
              <UrlhistoryLine url={url} key={url.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default App;
