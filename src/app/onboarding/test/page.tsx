import AlgecomQuestionnaire from '@/components/onboarding/AlgecomQuestionnaire';
import Image from 'next/image';

export default function TestQuestionnairePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-[#1E3A8A]">
      {/* Logo Container */}
      <div className="absolute top-8 left-8">
        <Image
          src="/logo/svg/logo_white.svg" // Adjust this path to match your logo location
          alt="Algecom Logo"
          width={141}
          height={64}
          priority
        />
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          
          <AlgecomQuestionnaire />
        </div>
      </div>
    </div>
  );
}