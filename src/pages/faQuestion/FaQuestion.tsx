import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/Container";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaQuestion = () => {
    return (
        <div className="mt-16">
            <Container>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <SectionTitle
                            firstText="Frequently"
                            secondText="asked question"
                        />
                        <SectionDescription
                            text="Did you come here for something in particular or just general Riker-bashing? And blowing"
                        />
                    </div>
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="shipping"
                        className="w-full"
                    >
                        <AccordionItem value="shipping">
                            <AccordionTrigger>What are your shipping options?</AccordionTrigger>
                            <AccordionContent>
                                We offer standard (5-7 days), express (2-3 days), and overnight
                                shipping. Free shipping on international orders.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="returns">
                            <AccordionTrigger>What is your return policy?</AccordionTrigger>
                            <AccordionContent>
                                Returns accepted within 30 days. Items must be unused and in original
                                packaging. Refunds processed within 5-7 business days.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="support">
                            <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                            <AccordionContent>
                                Reach us via email, live chat, or phone. We respond within 24 hours
                                during business days.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </Container>
        </div>
    );
};

export default FaQuestion;