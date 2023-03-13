/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideo } from "../features/relatedVideo/relatedVideoSlice";
import Loading from "./Loading";
import RelatedVideoItem from "./RelatedVideoItem";

function RelatedVideoList() {
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.singleVideo);
  const { relatedVideos, isLoading, isError } = useSelector(
    (state) => state.relatedVideos
  );

  useEffect(() => {
    dispatch(fetchRelatedVideo({ tags: video.tags, id: video.id }));
  }, [dispatch, video.id, video.tags]);

  // decide what to render
  let element;

  if (isLoading) {
    element = <Loading />;
  }
  if (isError) {
    element = <h1>Something Wrong ! </h1>;
  }
  if (!isLoading && !isError && relatedVideos.length === 0) {
    element = <h1>Now videos found</h1>;
  }
  if (relatedVideos.length > 0) {
    element = relatedVideos.map((relatedVideo) => (
      <RelatedVideoItem key={relatedVideo.id} {...relatedVideo} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {element}
    </div>
  );
}

export default RelatedVideoList;
