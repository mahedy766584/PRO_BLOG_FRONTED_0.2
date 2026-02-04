import Container from "@/components/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ProBlogForm from "@/form/ProBlogForm";
import ProBlogInput from "@/form/ProBlogInput";
import ProBlogTextarea from "@/form/ProBlogTextarea";
import { 
    Facebook, X, Youtube, 
    MapPin, Phone, Mail, Send,
} from "lucide-react";
import type { FieldValues, SubmitHandler } from "react-hook-form";

const ContactUs = () => {

    const handleContact: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        // Add toast notification logic here if needed
    };

    return (
        <div className="relative min-h-screen bg-gray-50 flex items-center py-10 md:py-20 overflow-hidden px-4 md:px-0">
            
            {/* Background Decoration (Adjusted for Mobile) */}
            <div className="absolute top-[-5%] right-[-10%] w-48 h-48 md:w-96 md:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-[-5%] left-[-10%] w-48 h-48 md:w-96 md:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <Container>
                <div className="relative z-10 max-w-6xl mx-auto">
                    
                    {/* Header Section */}
                    <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
                        <SectionTitle
                            firstText="Get in"
                            secondText="Touch"
                            className="justify-center"
                        />
                        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base px-2">
                            Have a question or just want to say hi? We'd love to hear from you.
                            Fill out the form below and we'll get back to you shortly.
                        </p>
                    </div>

                    {/* Main Card */}
                    <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden flex flex-col lg:flex-row lg:min-h-150">
                        
                        {/* ➤ LEFT SIDE: Contact Info (Dark Theme) */}
                        <div className="w-full lg:w-5/12 bg-slate-900 p-6 md:p-10 flex flex-col justify-between relative overflow-hidden order-1 lg:order-1">
                            {/* Texture Overlay */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                            
                            <div className="relative z-10 space-y-6 md:space-y-8">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Contact Information</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Dynamically underwhelm integrated outsourcing via timely models.
                                    </p>
                                </div>

                                <div className="space-y-5 md:space-y-6">
                                    <div className="flex items-start gap-3 md:gap-4 text-slate-300 group">
                                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-blue-600 transition-colors">
                                            <Mail size={18} className="md:w-5 md:h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">Email Us</h4>
                                            <p className="text-xs md:text-sm mt-0.5 break-all">problog.notebook@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 md:gap-4 text-slate-300 group">
                                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-green-600 transition-colors">
                                            <Phone size={18} className="md:w-5 md:h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">Call Us</h4>
                                            <p className="text-xs md:text-sm mt-0.5">+880 1655-465465</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 md:gap-4 text-slate-300 group">
                                        <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-purple-600 transition-colors">
                                            <MapPin size={18} className="md:w-5 md:h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">Visit Us</h4>
                                            <p className="text-xs md:text-sm mt-0.5 leading-snug">9567 Turner Trace Apt. BC C3G8A4</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="relative z-10 mt-8 md:mt-12 lg:mt-0">
                                <h4 className="text-white font-medium text-sm mb-3 md:mb-4">Follow us on</h4>
                                <div className="flex items-center gap-3">
                                    {[Facebook, X, Youtube].map((Icon, index) => (
                                        <button key={index} className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
                                            <Icon size={16} className="md:w-4.5 md:h-4.5" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Circle */}
                            <div className="absolute bottom-12.5 right-12.5 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
                        </div>

                        {/* ➤ RIGHT SIDE: Form (Light Theme) */}
                        <div className="w-full lg:w-7/12 p-6 md:p-12 bg-white flex flex-col justify-center order-2 lg:order-2">
                            <ProBlogForm onSubmit={handleContact}>
                                <div className="space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        <div className="space-y-1">
                                            <ProBlogInput
                                                label="Full Name"
                                                name="name"
                                                type="text"
                                                rules={{ required: "Name is required" }}
                                                className="bg-gray-50 border-gray-200 focus:border-black focus:ring-0 rounded-xl h-11 md:h-12"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <ProBlogInput
                                                label="Email Address"
                                                name="email"
                                                type="email"
                                                rules={{ required: "Email is required" }}
                                                className="bg-gray-50 border-gray-200 focus:border-black focus:ring-0 rounded-xl h-11 md:h-12"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <ProBlogInput
                                            label="Subject"
                                            name="subject"
                                            type="text"
                                            rules={{ required: "Subject is required" }}
                                            className="bg-gray-50 border-gray-200 focus:border-black focus:ring-0 rounded-xl h-11 md:h-12"
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <ProBlogTextarea
                                            name="message"
                                            label="Your Message"
                                            rules={{ required: "Message is required" }}
                                            placeholder="Write your thoughts here..."
                                            className="bg-gray-50 border-gray-200 focus:border-black focus:ring-0 rounded-xl min-h-30 md:min-h-37/5 p-3 md:p-4"
                                        />
                                    </div>

                                    <div className="pt-2 md:pt-4">
                                        <button 
                                            type="submit" 
                                            className="group w-full md:w-auto bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 md:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm md:text-base"
                                        >
                                            Send Message
                                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </ProBlogForm>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;