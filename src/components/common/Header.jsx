import Link from "next/link";
import { useRouter } from "next/router";

export default function Header({ title, subtitle }) {
  const router = useRouter();
  const pathSegments = router.asPath
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <div
      className="card bg-secondary text-center text-white py-4 my-5"
      style={{ borderRadius: 15 }}
    >
      <h1 className="mb-4">{title}</h1>
      {subtitle ? (
        <p className="mt-2 mb-0">{subtitle}</p>
      ) : (
        <nav>
          <span>
            <Link className="text-white" href={"/"}>
              <i className="fas fa-home smaller-text" />
            </Link>
            <span> / </span>
          </span>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            return (
              <span key={index}>
                <Link className="text-white" href={path}>
                  {segment}
                </Link>
                {index < pathSegments.length - 1 && <span> / </span>}
              </span>
            );
          })}
        </nav>
      )}
    </div>
  );
}
