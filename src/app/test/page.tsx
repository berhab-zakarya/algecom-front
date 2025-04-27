// Example usage of your custom Button component
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, User } from "lucide-react";
import { Input } from "@/components/common/Input"
import { Mail, Lock, Search } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/common/Card";
import { Checkbox } from "@/components/common/Checkbox";
import { Switch } from "@/components/common/Switch";
import { Slider } from "@/components/common/Slider";


export default function InputExamples() {
  return (
  <div className="space-y-8 p-4">
    <div>
      <Input variant="primary" placeholder="No radius" radius="none" />
      <Input variant="primary" placeholder="Small radius" radius="sm" />
      <Input variant="primary" placeholder="Medium radius" radius="md" />
      <Input variant="primary" placeholder="Large radius" radius="lg" />
      <Input variant="primary" placeholder="Extra large radius" radius="xl" />
      <Input variant="primary" placeholder="Full radius" radius="full" />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <Input
        variant="primary"
        leftIcon={<Mail size={16} />}
        placeholder="Enter your email"
      />
      <Input
        variant="primary"
        leftIcon={<Lock size={16} />}
        rightIcon={<Search size={16} />}
        placeholder="Enter password"
        type="password"
      />
    </div>

    {/* Sizes */}
    <div className="grid grid-cols-3 gap-4">
      <Input size={1} placeholder="Small input" />
      <Input size={2} placeholder="Medium input" />
      <Input size={3} placeholder="Large input" />
    </div>

    {/* With Labels */}
    <div className="grid grid-cols-2 gap-4">
      <Input
        label="Email"
        variant="primary"
        leftIcon={<Mail size={16} />}
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        variant="primary"
        leftIcon={<Lock size={16} />}
        placeholder="Enter password"
        type="password"
      />

      
<Slider min={0} max={100} />

<Checkbox label="Label Name" color="primary" />
<Checkbox label="Label Name" color="neutral" disabled />
<Switch label="Label Name" color="primary" />
<Switch label="Label Name" color="neutral" disabled />
    </div>  
  </div>
  );
}