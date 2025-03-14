export interface ProgressProps {
  size: number;
  value?: number;
  label?: string;
}
export function Progress({ size, value, label }: ProgressProps) {
  const percentage = Math.min(size, 100);
  return (
    <div className="w-full">
      {label ? (
        <h3 className="text-xs dark:text-gray-200 mb-1">{label}</h3>
      ) : null}
      <div
        role="progressbar"
        aria-valuenow={size}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby="progress-label-2"
        className="relative h-3 w-full overflow-hidden bg-gray-200 rounded-sm dark:bg-gray-700"
      >
        <div
          className="h-full flex items-center justify-center bg-green-600 dark:bg-green-500 rounded-xs text-xs text-white font-semibold transition-all duration-300"
          style={{ width: `${percentage}%` }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
