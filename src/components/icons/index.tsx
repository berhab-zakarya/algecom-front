/*import { cn } from "@/lib/utils"

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function Icon({ children, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      {children}
    </svg>
  )
}

// Example icon from your design system
export function HomeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </Icon>
  )
}*/



import { cn } from "@/lib/utils"
import Image from "next/image";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  size?: number;
  className?: string;
}

export function IconLayout({ children, className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      {children}
    </svg>
  )
}

// Example icon from your design system
export function HomeIcon(props: IconProps) {
  return (
    <IconLayout {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </IconLayout>
  )
}


export const Icon: React.FC<IconProps> = ({ name, size = 20, className = '' }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <Image
        src={`/assets/icons/${name}.svg`}
        alt={name}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  );
};

export const DashboardIcon = (props: any) => <Icon name="dashboard" {...props} />;
export const InsightIcon = (props: any) => <Icon name="insight" {...props} />;
export const InvoicesIcon = (props: any) => <Icon name="invoices" {...props} />;
export const ProductsIcon = (props: any) => <Icon name="products" {...props} />;
export const ReimburseIcon = (props: any) => <Icon name="reimburse" {...props} />;
export const InboxIcon = (props: any) => <Icon name="inbox" {...props} />;
export const PeopleIcon = (props: any) => <Icon name="inbox" {...props} />;
export const SettingsIcon = (props: any) => <Icon name="settings" {...props} />;
export const HelpIcon = (props: any) => <Icon name="help" {...props} />;
export const DarkModeIcon = (props: any) => <Icon name="dark-mode" {...props} />;
export const SupportIcon = (props: any) => <Icon name="support" {...props} />;
export const GiftIcon = (props: any) => <Icon name="gift" {...props} />;
export const LogoutIcon = (props: any) => <Icon name="logout" {...props} />;
export const SearchIcon = (props: any) => <Icon name="search" {...props} />;
export const NotificationIcon = (props: any) => <Icon name="notification" {...props} />;