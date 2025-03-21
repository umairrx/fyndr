import { client } from "@/sanity/lib/client";
import { writeClient } from "@/sanity/lib/write-client";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/querries";

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  writeClient
    .patch(id)
    .set({ views: totalViews + 1 })
    .commit()
    .catch((error) => console.error("Failed to update views:", error));

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="bg-black">
        <span className="text-white">Views: {totalViews}</span>
      </p>
    </div>
  );
};
export default View;
