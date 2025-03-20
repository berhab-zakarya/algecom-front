# Next.js Group Project

Welcome to our group project! This README provides a step-by-step guide for setting up and developing our Next.js application.

## Project Overview

This project aims to help us learn Next.js fundamentals, component architecture, styling with Shadcn UI, and best practices for modern React applications.

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or higher)
- npm or yarn
- Git

## Missions

### Mission 1: Set Up Next.js Project

**Task**: Install and configure a new Next.js application

**Steps**:
1. Create a new Next.js project using the following command:
   ```bash
   npx create-next-app@latest my-nextjs-project
   ```

2. Answer the setup questions:
   - Would you like to use TypeScript? → Yes
   - Would you like to use ESLint? → Yes
   - Would you like to use Tailwind CSS? → Yes
   - Would you like to use `src/` directory? → Yes
   - Would you like to use App Router? → Yes
   - Would you like to customize the default import alias (@/*)? → Yes

3. Navigate to your project directory:
   ```bash
   cd my-nextjs-project
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to verify the installation.

### Mission 2: Create Components Structure

**Task**: Set up a proper component organization

**Steps**:
1. Create a components folder structure:
   ```bash
   mkdir -p src/components/ui
   mkdir -p src/components/layout
   mkdir -p src/components/features
   ```

2. Create a basic component:
   Create a file `src/components/ui/Button.tsx`:
   ```tsx
   'use client';

   import React from 'react';
   
   interface ButtonProps {
     children: React.ReactNode;
     variant?: 'primary' | 'secondary' | 'outline';
     size?: 'small' | 'medium' | 'large';
     onClick?: () => void;
   }
   
   export default function Button({ 
     children, 
     variant = 'primary', 
     size = 'medium', 
     onClick 
   }: ButtonProps) {
     // Create class strings based on variants and sizes
     const baseClasses = 'rounded font-medium transition-colors focus:outline-none focus:ring-2';
     
     const variantClasses = {
       primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
       secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
       outline: 'bg-transparent border border-gray-300 hover:bg-gray-50 focus:ring-gray-500'
     };
     
     const sizeClasses = {
       small: 'py-1 px-2 text-sm',
       medium: 'py-2 px-4 text-base',
       large: 'py-3 px-6 text-lg'
     };
     
     const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
     
     return (
       <button className={classes} onClick={onClick}>
         {children}
       </button>
     );
   }
   ```

3. Create a layout component:
   Create a file `src/components/layout/Header.tsx`:
   ```tsx
   'use client';

   import Link from 'next/link';
   import React from 'react';
   
   export default function Header() {
     return (
       <header className="bg-white shadow-sm">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between h-16 items-center">
             <div className="flex-shrink-0">
               <Link href="/" className="font-bold text-xl">
                 Next.js Project
               </Link>
             </div>
             <nav className="flex space-x-8">
               <Link href="/" className="text-gray-900 hover:text-gray-600">
                 Home
               </Link>
               <Link href="/about" className="text-gray-900 hover:text-gray-600">
                 About
               </Link>
               <Link href="/contact" className="text-gray-900 hover:text-gray-600">
                 Contact
               </Link>
             </nav>
           </div>
         </div>
       </header>
     );
   }
   ```

4. Use the components in a page:
   Update `src/app/page.tsx`:
   ```tsx
   import Header from '@/components/layout/Header';
   import Button from '@/components/ui/Button';
   
   export default function Home() {
     return (
       <div>
         <Header />
         <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
           <h1 className="text-3xl font-bold mb-6">Welcome to our Next.js Project</h1>
           <div className="space-x-4">
             <Button>Default Button</Button>
             <Button variant="secondary">Secondary Button</Button>
             <Button variant="outline" size="large">Large Outline Button</Button>
           </div>
         </main>
       </div>
     );
   }
   ```

### Mission 3: Install and Configure Shadcn UI

**Task**: Integrate Shadcn UI components into our project

**Steps**:
1. Install Shadcn UI CLI:
   ```bash
   npm install -D @shadcn/ui
   ```

2. Initialize Shadcn UI:
   ```bash
   npx shadcn-ui@latest init
   ```

3. Answer the configuration questions:
   - Would you like to use TypeScript? → Yes
   - Which style would you like to use? → Default
   - Which color would you like to use as base color? → Slate
   - Where is your global CSS file? → src/app/globals.css
   - Do you want to use CSS variables? → Yes
   - Where is your tailwind.config.js located? → tailwind.config.js
   - Configure the import alias for components? → @/components
   - Configure the import alias for utils? → @/lib/utils
   - Are you using React Server Components? → Yes

4. Install and use Shadcn UI components:
   ```bash
   npx shadcn-ui@latest add button
   npx shadcn-ui@latest add card
   npx shadcn-ui@latest add dropdown-menu
   ```

5. Create a demo page using Shadcn components:
   Create a file `src/app/ui-demo/page.tsx`:
   ```tsx
   import { Button } from "@/components/ui/button";
   import {
     Card,
     CardContent,
     CardDescription,
     CardFooter,
     CardHeader,
     CardTitle,
   } from "@/components/ui/card";
   import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuLabel,
     DropdownMenuSeparator,
     DropdownMenuTrigger,
   } from "@/components/ui/dropdown-menu";
   
   export default function UiDemo() {
     return (
       <div className="max-w-7xl mx-auto px-4 py-12">
         <h1 className="text-3xl font-bold mb-8">Shadcn UI Components Demo</h1>
         
         <section className="mb-8">
           <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
           <div className="flex flex-wrap gap-4">
             <Button variant="default">Default</Button>
             <Button variant="destructive">Destructive</Button>
             <Button variant="outline">Outline</Button>
             <Button variant="secondary">Secondary</Button>
             <Button variant="ghost">Ghost</Button>
             <Button variant="link">Link</Button>
           </div>
         </section>
         
         <section className="mb-8">
           <h2 className="text-2xl font-semibold mb-4">Cards</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Card>
               <CardHeader>
                 <CardTitle>Card Title</CardTitle>
                 <CardDescription>Card Description</CardDescription>
               </CardHeader>
               <CardContent>
                 <p>Card Content goes here.</p>
               </CardContent>
               <CardFooter>
                 <Button>Action</Button>
               </CardFooter>
             </Card>
             
             <Card>
               <CardHeader>
                 <CardTitle>Feature Card</CardTitle>
                 <CardDescription>Learn about Next.js features</CardDescription>
               </CardHeader>
               <CardContent>
                 <p>Next.js provides features like Server Components, API Routes, and more.</p>
               </CardContent>
               <CardFooter className="flex justify-between">
                 <Button variant="outline">Cancel</Button>
                 <Button>Continue</Button>
               </CardFooter>
             </Card>
           </div>
         </section>
         
         <section>
           <h2 className="text-2xl font-semibold mb-4">Dropdown Menu</h2>
           <DropdownMenu>
             <DropdownMenuTrigger asChild>
               <Button>Open Menu</Button>
             </DropdownMenuTrigger>
             <DropdownMenuContent>
               <DropdownMenuLabel>My Account</DropdownMenuLabel>
               <DropdownMenuSeparator />
               <DropdownMenuItem>Profile</DropdownMenuItem>
               <DropdownMenuItem>Settings</DropdownMenuItem>
               <DropdownMenuItem>Billing</DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem>Log out</DropdownMenuItem>
             </DropdownMenuContent>
           </DropdownMenu>
         </section>
       </div>
     );
   }
   ```

### Mission 4: Customize Shadcn UI Components

**Task**: Customize the Shadcn UI theme and create custom variants

**Steps**:
1. Modify the Tailwind configuration:
   Update `tailwind.config.js`:
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     darkMode: ["class"],
     content: [
       './pages/**/*.{ts,tsx}',
       './components/**/*.{ts,tsx}',
       './app/**/*.{ts,tsx}',
       './src/**/*.{ts,tsx}',
     ],
     theme: {
       container: {
         center: true,
         padding: "2rem",
         screens: {
           "2xl": "1400px",
         },
       },
       extend: {
         colors: {
           border: "hsl(var(--border))",
           input: "hsl(var(--input))",
           ring: "hsl(var(--ring))",
           background: "hsl(var(--background))",
           foreground: "hsl(var(--foreground))",
           primary: {
             DEFAULT: "hsl(var(--primary))",
             foreground: "hsl(var(--primary-foreground))",
           },
           secondary: {
             DEFAULT: "hsl(var(--secondary))",
             foreground: "hsl(var(--secondary-foreground))",
           },
           destructive: {
             DEFAULT: "hsl(var(--destructive))",
             foreground: "hsl(var(--destructive-foreground))",
           },
           muted: {
             DEFAULT: "hsl(var(--muted))",
             foreground: "hsl(var(--muted-foreground))",
           },
           accent: {
             DEFAULT: "hsl(var(--accent))",
             foreground: "hsl(var(--accent-foreground))",
           },
           popover: {
             DEFAULT: "hsl(var(--popover))",
             foreground: "hsl(var(--popover-foreground))",
           },
           card: {
             DEFAULT: "hsl(var(--card))",
             foreground: "hsl(var(--card-foreground))",
           },
           // Add custom brand colors
           brand: {
             light: "#60a5fa", // blue-400
             DEFAULT: "#3b82f6", // blue-500
             dark: "#2563eb", // blue-600
           },
         },
         borderRadius: {
           lg: "var(--radius)",
           md: "calc(var(--radius) - 2px)",
           sm: "calc(var(--radius) - 4px)",
         },
         keyframes: {
           "accordion-down": {
             from: { height: 0 },
             to: { height: "var(--radix-accordion-content-height)" },
           },
           "accordion-up": {
             from: { height: "var(--radix-accordion-content-height)" },
             to: { height: 0 },
           },
         },
         animation: {
           "accordion-down": "accordion-down 0.2s ease-out",
           "accordion-up": "accordion-up 0.2s ease-out",
         },
       },
     },
     plugins: [require("tailwindcss-animate")],
   }
   ```

2. Update CSS variables for custom theme:
   Modify `src/app/globals.css` to update the primary color:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   @layer base {
     :root {
       --background: 0 0% 100%;
       --foreground: 222.2 84% 4.9%;
   
       --card: 0 0% 100%;
       --card-foreground: 222.2 84% 4.9%;
   
       --popover: 0 0% 100%;
       --popover-foreground: 222.2 84% 4.9%;
   
       --primary: 221.2 83.2% 53.3%;
       --primary-foreground: 210 40% 98%;
   
       --secondary: 210 40% 96.1%;
       --secondary-foreground: 222.2 47.4% 11.2%;
   
       --muted: 210 40% 96.1%;
       --muted-foreground: 215.4 16.3% 46.9%;
   
       --accent: 210 40% 96.1%;
       --accent-foreground: 222.2 47.4% 11.2%;
   
       --destructive: 0 84.2% 60.2%;
       --destructive-foreground: 210 40% 98%;
   
       --border: 214.3 31.8% 91.4%;
       --input: 214.3 31.8% 91.4%;
       --ring: 221.2 83.2% 53.3%;
   
       --radius: 0.5rem;
     }
   
     .dark {
       --background: 222.2 84% 4.9%;
       --foreground: 210 40% 98%;
   
       --card: 222.2 84% 4.9%;
       --card-foreground: 210 40% 98%;
   
       --popover: 222.2 84% 4.9%;
       --popover-foreground: 210 40% 98%;
   
       --primary: 217.2 91.2% 59.8%;
       --primary-foreground: 222.2 47.4% 11.2%;
   
       --secondary: 217.2 32.6% 17.5%;
       --secondary-foreground: 210 40% 98%;
   
       --muted: 217.2 32.6% 17.5%;
       --muted-foreground: 215 20.2% 65.1%;
   
       --accent: 217.2 32.6% 17.5%;
       --accent-foreground: 210 40% 98%;
   
       --destructive: 0 62.8% 30.6%;
       --destructive-foreground: 210 40% 98%;
   
       --border: 217.2 32.6% 17.5%;
       --input: 217.2 32.6% 17.5%;
       --ring: 224.3 76.3% 48%;
     }
   }
   
   @layer base {
     * {
       @apply border-border;
     }
     body {
       @apply bg-background text-foreground;
     }
   }
   ```

3. Create a custom variant of the button component:
   Create a file `src/components/ui/custom-button.tsx`:
   ```tsx
   import { cva } from "class-variance-authority";
   import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "@/components/ui/button";
   import { cn } from "@/lib/utils";
   
   interface CustomButtonProps extends ShadcnButtonProps {
     gradient?: boolean;
     rounded?: boolean;
   }
   
   // Extended variants for our custom button
   const buttonVariants = cva(
     "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
     {
       variants: {
         gradient: {
           true: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white",
         },
         rounded: {
           true: "rounded-full",
           false: "rounded-md",
         },
       },
       defaultVariants: {
         gradient: false,
         rounded: false,
       },
     }
   );
   
   export function CustomButton({
     className,
     gradient,
     rounded,
     ...props
   }: CustomButtonProps) {
     return (
       <ShadcnButton
         className={cn(buttonVariants({ gradient, rounded }), className)}
         {...props}
       />
     );
   }
   ```

4. Create a demo page for custom components:
   Create a file `src/app/custom-ui-demo/page.tsx`:
   ```tsx
   import { CustomButton } from "@/components/ui/custom-button";
   import { Button } from "@/components/ui/button";
   
   export default function CustomUiDemo() {
     return (
       <div className="max-w-7xl mx-auto px-4 py-12">
         <h1 className="text-3xl font-bold mb-8">Custom UI Components Demo</h1>
         
         <section className="mb-8">
           <h2 className="text-2xl font-semibold mb-4">Custom Buttons</h2>
           <div className="flex flex-wrap gap-4">
             <CustomButton>Default Custom</CustomButton>
             <CustomButton gradient>Gradient Button</CustomButton>
             <CustomButton rounded>Rounded Button</CustomButton>
             <CustomButton gradient rounded>Gradient Rounded</CustomButton>
             <Button className="bg-brand hover:bg-brand-dark">Brand Color Button</Button>
           </div>
         </section>
       </div>
     );
   }
   ```

## Project Structure

After completing all missions, your project structure should look like this:

```
my-nextjs-project/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── custom-ui-demo/
│   │   │   └── page.tsx
│   │   ├── ui-demo/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── features/
│   │   ├── layout/
│   │   │   └── Header.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── button.tsx (shadcn)
│   │       ├── card.tsx (shadcn)
│   │       ├── custom-button.tsx
│   │       └── dropdown-menu.tsx (shadcn)
│   └── lib/
│       └── utils.ts
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Development Tips

1. **Component Best Practices**
   - Keep components small and focused on a single responsibility
   - Use TypeScript interfaces for prop definitions
   - Split complex components into smaller sub-components
   - Use the 'use client' directive only when necessary

2. **Styling Guidelines**
   - Use Tailwind CSS classes for styling
   - For complex components, consider creating custom variants
   - Maintain a consistent color scheme throughout the application

3. **Next.js Features to Explore**
   - Server Components vs. Client Components
   - Data Fetching methods
   - Route handling with App Router
   - Static Site Generation (SSG) vs. Server-Side Rendering (SSR)

## Collaboration Guidelines

1. **Git Workflow**
   - Always pull before starting work
   - Create feature branches for new features
   - Use descriptive commit messages
   - Create pull requests for code review

2. **Code Reviews**
   - Check for code quality and best practices
   - Ensure components are reusable and maintainable
   - Verify that the feature works as intended

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is for educational purposes only.
