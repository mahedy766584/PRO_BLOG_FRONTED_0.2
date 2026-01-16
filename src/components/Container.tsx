import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <div className="max-w-6xl mx-auto">
            {children}
        </div>
    );
};

export default Container;