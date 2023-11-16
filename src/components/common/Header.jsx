export default function Header({ title, subtitle }) {
  return (
    <div
      className="card bg-secondary text-center text-white py-4 my-5"
      style={{ borderRadius: 15 }}
    >
      <h1>{title}</h1>
      <p className="mt-2 mb-0">{subtitle}</p>
    </div>
  );
}
