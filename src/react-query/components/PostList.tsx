import { Fragment, useState } from "react";
import usePosts from "../hooks/usePosts";
import React from "react";

function PostList() {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      <button disabled={isFetchingNextPage} className="btn btn-primary" onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
}

export default PostList;
