/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { FormProvider, useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

type TFormConfig = {
    defaultValues?: Record<string, unknown>;
    resolver?: any;
};

type TFormProps = {
    onSubmit: SubmitHandler<FieldValues>;
    children: ReactNode;
} & TFormConfig;

const ProBlogForm = ({ children, onSubmit, defaultValues = {}, resolver }: TFormProps) => {
    const methods = useForm({
        defaultValues,
        resolver,
    });

    const submit: SubmitHandler<FieldValues> = (data) => {
        onSubmit(data);
        methods.reset(); 
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(submit)} className="space-y-4">
                {children}
            </form>
        </FormProvider>
    );
};

export default ProBlogForm;
