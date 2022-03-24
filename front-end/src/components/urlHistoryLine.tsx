import React from 'react';
import addHostname from '../utils/addHostname';
import { Url } from '../graphql';
import {
  useGetUrlQuery,
} from '../graphql/url.generated';

function UrlhistoryLine({ url }: { url: Url }) {
  const { data, refetch } = useGetUrlQuery({ variables: { shortUrl: url.shortUrl } });

  const count = data?.url.clicks.length;

  return (
    <li key={url.id} className="px-8 py-4 content-center justify-between flex">
      <span>{url.url}</span>
      <span>
        <a
          className="text-blue-600 pr-3"
          href={addHostname(url.shortUrl)}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            setTimeout(() => {
              refetch();
            }, 1000);
          }}
          onMouseDown={(e) => {
            if (e.button === 1) {
              setTimeout(() => {
                refetch();
              }, 1000);
            }
          }}
        >
          {addHostname(url.shortUrl)}
        </a>
        <span className="py-2 px-6 bg-blue-500 text-center rounded-2xl">{count}</span>
      </span>
    </li>
  );
}

export default UrlhistoryLine;
