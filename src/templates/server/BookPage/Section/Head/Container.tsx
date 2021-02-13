import React from 'react';
import {PublisherComponent, SeriesComponent} from './Component';

export const PublisherHead: React.FC<{
  className?: string;
  publisher: {
    id: string;
    name: string;
  };
}> = ({publisher, ...props}) => {
  return (
    <PublisherComponent
      {...props}
      publisher={publisher}
      link={{
        pathname: `/publishers/[id]`,
        query: {id: publisher.id},
      }}
    />
  );
};

export const SeriesHead: React.FC<{
  className?: string;
  series: {
    id: string;
    title: string;
  };
}> = ({series, ...props}) => {
  return (
    <SeriesComponent
      {...props}
      series={series}
      link={{
        pathname: `/series/[id]`,
        query: {id: series.id},
      }}
    />
  );
};
