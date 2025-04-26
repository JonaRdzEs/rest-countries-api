import { NoContent, FileSearchIcon } from "@/components";

export default function NotFound() {
  return (
    <NoContent title="Page Not Found" icon={<FileSearchIcon />} withButton>
      <>
        <p className="text-lg text-charcoal-black text-center">
          The page you’re looking for doesn’t exist or may have been moved.
        </p>
        <p className="text-lg text-charcoal-black text-center">
          Double-check the URL or head back to the homepage to continue
          exploring the app.
        </p>
      </>
    </NoContent>
  );
}
