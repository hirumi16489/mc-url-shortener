import React from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetUrlQuery,
} from '../graphql/url.generated';

function UrlRedirect() {
  const { queryParam } = useParams();
  let shortUrl = '';
  let skip = true;

  if (typeof queryParam === 'string') {
    shortUrl = queryParam;
    skip = false;
  }

  const { data } = useGetUrlQuery({ variables: { shortUrl }, skip });

  if (data?.url) {
    window.location.href = data.url.url;
    return null;
  }

  return null;
}

export default UrlRedirect;
