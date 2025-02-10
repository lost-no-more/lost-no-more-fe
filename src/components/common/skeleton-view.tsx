interface SkeletonViewProps {
  height: string;
  width: string;
}

export default function SkeletonView({ height, width }: SkeletonViewProps) {
  return <div className="animate-pulse rounded-xl bg-muted" style={{ height, width }} />;
}
