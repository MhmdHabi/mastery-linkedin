export default function BenefitItem({ icon, title, desc }) {
  return (
    <article className="flex items-start gap-4">
      <div className="flex-shrink-0 p-3 rounded-xl bg-blue-100 dark:bg-blue-900/40">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
      </div>
    </article>
  );
}
