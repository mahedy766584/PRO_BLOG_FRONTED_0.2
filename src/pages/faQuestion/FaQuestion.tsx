import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
    MessageCircle, 
    ArrowRight, 
    PenTool, 
    Mail, 
    Copy, 
    Handshake, 
    ShieldAlert, 
    Plus, 
    Minus 
} from "lucide-react";

// Data with specific icons for visual storytelling
const faqData = [
    {
        id: "guest-post",
        icon: PenTool,
        question: "Do you accept guest posts?",
        answer: "Yes, we love community contributions! We accept high-quality guest posts related to technology, lifestyle, and productivity. Please check our 'Write for Us' page.",
    },
    {
        id: "newsletter",
        icon: Mail,
        question: "Frequency of newsletters?",
        answer: "We value your inbox. We send a curated weekly digest every Friday morning featuring our top stories, exclusive resources, and community highlights.",
    },
    {
        id: "content-usage",
        icon: Copy,
        question: "Can I republish articles?",
        answer: "We allow re-posting only with strict permission. You can quote up to 100 words with a do-follow backline to the original article.",
    },
    {
        id: "sponsorship",
        icon: Handshake,
        question: "Sponsorship opportunities?",
        answer: "We offer various partnership opportunities including banner ads, sponsored articles, and newsletter mentions. Reach out for our media kit.",
    },
    {
        id: "comments",
        icon: ShieldAlert,
        question: "Comment moderation policy?",
        answer: "We aim to keep our community positive. Comments that include hate speech, spam links, or are irrelevant will be removed immediately.",
    },
];

const FaQuestion = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Ambient Glow (Decoration) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
                <div className="absolute top-20 left-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal" />
                <div className="absolute bottom-20 right-0 w-125 h-125 bg-blue-500/5 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-normal" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    
                    {/* Left Side: Brand Story & CTA */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
                        {/* Tag */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 shadow-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">
                                Support Center
                            </span>
                        </div>
                        
                        <div className="space-y-6">
                            <SectionTitle
                                firstText="Frequently Asked"
                                secondText="Questions"
                                className="text-left text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]" 
                                width="full"
                            />
                            
                            <SectionDescription
                                text="Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team."
                                className="text-left text-lg text-gray-500 dark:text-gray-400 font-light" 
                                width="full"
                            />
                        </div>

                        {/* Premium CTA Card */}
                        <div className="relative group overflow-hidden p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 shadow-xl shadow-gray-200/40 dark:shadow-none transition-all hover:shadow-2xl hover:-translate-y-1">
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 space-y-5">
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Need more help?
                                    </h4>
                                    <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                                        Our support team is just a click away. We usually respond within 2 hours.
                                    </p>
                                </div>
                                <Button className="w-full rounded-xl h-12 text-base font-medium shadow-lg shadow-primary/20">
                                    Chat with us <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Unique Accordion Design */}
                    <div className="lg:col-span-7 w-full">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="guest-post"
                            className="flex flex-col gap-4"
                        >
                            {faqData.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="group border-none rounded-2xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <AccordionTrigger className="px-6 py-5 hover:no-underline [&[data-state=open]>div>span.minus]:block [&[data-state=open]>div>span.plus]:hidden [&>svg]:hidden">
                                        <div className="flex items-center gap-5 w-full text-left">
                                            {/* Icon Box */}
                                            <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-500 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300">
                                                <item.icon size={22} strokeWidth={1.5} />
                                            </div>

                                            {/* Question Text */}
                                            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors flex-1">
                                                {item.question}
                                            </span>

                                            {/* Custom Plus/Minus Animation */}
                                            <div className="h-8 w-8 shrink-0 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-400 group-hover:border-primary group-hover:text-primary transition-all">
                                                <span className="plus"><Plus size={16} /></span>
                                                <span className="minus hidden"><Minus size={16} /></span>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    
                                    <AccordionContent className="px-6 pb-6 sm:pl-22">
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base">
                                            {item.answer}
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FaQuestion;