import { DecoderEffectText } from "@/components/DecoderEffectText";
import { Header } from "@/components/Header";
import { DatesSection } from "@/components/DatesSection";
import { Logo } from "@/components/Logo";

export default function Home() {
	return (
		<div className="min-h-screen font-sans">
			<Header />
			<main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 gap-16">
				<div className="flex flex-col items-center gap-6">
					<Logo className="w-32 h-32 text-indigo-500" />
					<DecoderEffectText text={"ACCORD DE GRÂM"}/>
				</div>
				<DatesSection />
			</main>
			<footer id="contact" className="py-12 text-center flex flex-col gap-4">
				<p className="font-mono text-sm tracking-widest uppercase text-foreground/60">
					{`Contact Us • bookings@accorddegram.com • Beats with <3 from BK`}
				</p>
			</footer>
		</div>
	);
}
