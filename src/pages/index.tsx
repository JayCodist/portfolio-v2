import { useRouter } from "next/router";

const Index = () => {
  let routeTitle;
  const router = useRouter();
  if (typeof window !== "undefined") {
    const { route } = router;
    routeTitle =
      (route.split("/").pop() || "").replace("-", " ") || "Landing Page";
  }

  return (
    <main className="content-layout">
      <h1 suppressHydrationWarning className="capitalize">
        {routeTitle}
      </h1>
      <p>Coming soon</p>
    </main>
  );
};

export default Index;
