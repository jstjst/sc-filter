window.activeSCFeedFilter = (data) => (item) => {
  const content = "track" in item ? item.track : item.playlist;
  const noRepost = !content.type.includes("repost");
  const single = content.full_duration / 1000 / 60 < 30;
  return noRepost || single;
};
