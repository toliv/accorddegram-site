import { DecoderEffectText } from "@/components/DecoderEffectText";
import { Header } from "@/components/Header";
import { DatesSection } from "@/components/DatesSection";

export default function Home() {
	return (
		<div className="min-h-screen font-sans">
			<Header />
			<main className="flex flex-col items-center justify-center min-h-screen px-4 py-16 gap-16">
				<DecoderEffectText text={"ACCORD DE GRÂM"}/>
				<DatesSection />
			</main>
			<footer id="contact" className="py-12 text-center">
				<p className="font-mono text-sm tracking-widest uppercase text-foreground/60">
					Contact Us
				</p>
			</footer>
		</div>
	);
}
