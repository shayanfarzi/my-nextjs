import { useRouter } from "next/router";
function NewsDetail() {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.newsId}</h1>
      NewsDetail
    </div>
  );
}
export default NewsDetail;
