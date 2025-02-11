import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface CustomSwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  title: string;
  description?: string;
  className?: string;
  disabled?: boolean;
}

export default function CustomSwitch({
  checked,
  onCheckedChange,
  title,
  description,
  className,
  disabled = false,
}: CustomSwitchProps) {
  const id = `switch-${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-lg border bg-card p-4 shadow-sm',
        className
      )}
    >
      <div className="space-y-0.5">
        <Label htmlFor={id} className="text-lg font-semibold">
          {title}
        </Label>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} disabled={disabled} />
    </div>
  );
}
