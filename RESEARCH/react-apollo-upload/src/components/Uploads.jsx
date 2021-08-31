import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const FileQuery = gql`
  {
    machines {
      Algorithm
      Word
      Percentage
      Second
      PathImage
    }
  }
`;

export default function Uploads() {
  const { loading, data } = useQuery(FileQuery);

  //console.log("xD: "+JSON.stringify(data));

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!data) {
    return <h1>No images to show</h1>;
  } else {
    return (
      <>
        <h1 className='text-center'>Recent uploads</h1>
        {data.machines.map((item) => {
          console.log(item);
          return (
            <div>
                {JSON.stringify(item)}
            </div>
          );
        })}
      </>
    );
  }
}
