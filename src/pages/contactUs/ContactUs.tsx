import Container from "@/components/Container";
import SectionDescription from "@/components/common/SectionDescription";
import SectionTitle from "@/components/common/SectionTitle";
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import ProBlogTextarea from "@/form/ProBlogTextarea";
import { Facebook, X, Youtube } from "lucide-react";
import type { FieldValues, SubmitHandler } from "react-hook-form";

const ContactUs = () => {

    const handleContact: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
    };

    return (
        <div className="mt-20">
            <Container>
                <div className="mx-auto w-5/6 space-y-6">
                    <SectionTitle
                        firstText="Contact"
                        secondText="Us"
                    />
                    <div className="w-full flex items-start justify-start text-start">
                        <div className="flex-1">
                            <ProBlogForm onSubmit={handleContact}>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-5 w-full">
                                        <ProBlogInput
                                            label="Name"
                                            name="name"
                                            type="text"
                                            rules={{ required: "Name is required" }}
                                        />
                                        <ProBlogInput
                                            label="Email"
                                            name="email"
                                            type="text"
                                            rules={{ required: "Email is required" }}
                                        />
                                    </div>
                                    <ProBlogInput
                                        label="Subject"
                                        name="subject"
                                        type="text"
                                        rules={{ required: "Subject is required" }}
                                    />

                                    <ProBlogTextarea
                                        name="message"
                                        label="Message"
                                        rules={{ required: "Message is required" }}
                                        placeholder="Type your message"
                                    />
                                </div>

                                <button type="submit" className="bg-main text-second px-4 py-2 rounded-md cursor-pointer">Send Message</button>

                            </ProBlogForm>
                        </div>
                        <div className=" flex flex-col space-y-7 flex-1">
                            <SectionDescription
                                text="Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without"
                                className="items-start text-start w-5/6"
                            />
                            <div className="space-y-3 w-full text-start items-start justify-start">
                                <SectionDescription
                                    text="problog.notebook@gmail.com"
                                    className="items-start text-start w-5/6"
                                />
                                <SectionDescription
                                    text="+886554 654654"
                                    className="items-start text-start w-5/6"
                                />
                                <SectionDescription
                                    text="9567 Turner Trace Apt. BC C3G8A4"
                                    className="items-start text-start w-5/6"
                                />

                                <div className="mt-10 space-y-7">
                                    <SectionTitle
                                        firstText="Follow"
                                        secondText="On"
                                        className="text-start w-5/6"
                                    />
                                    <div className="flex items-center gap-4 ml-10">
                                        <button className="w-8 h-8 bg-second hover:bg-main hover:text-second flex justify-center items-center p-1.5 duration-300 rounded-md cursor-pointer"><Facebook /></button>
                                        <button className="w-8 h-8 bg-second hover:bg-main hover:text-second flex justify-center items-center p-1.5 duration-300 rounded-md cursor-pointer"><X /></button>
                                        <button className="w-8 h-8 bg-second hover:bg-main hover:text-second flex justify-center items-center p-1.5 duration-300 rounded-md cursor-pointer"><Youtube /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;