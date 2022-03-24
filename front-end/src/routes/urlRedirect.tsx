import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetUrlQuery,
  useCreateUrlCLickMutation,
} from '../graphql/url.generated';

function UrlRedirect() {
  const { queryParam } = useParams();
  const [newClick] = useCreateUrlCLickMutation();
  let shortUrl = '';
  let skip = true;

  if (typeof queryParam === 'string') {
    shortUrl = queryParam;
    skip = false;
  }

  const { data } = useGetUrlQuery({ variables: { shortUrl }, skip });

  useEffect(() => {
    if (data?.url) {
      newClick({ variables: { urlId: data.url.id } });

      window.location.href = data.url.url;
    }
  }, [data]);

  return null;
}

export default UrlRedirect;
