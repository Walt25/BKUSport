type CollapsibleProps = {
    title: string;
    collapsible?: boolean;
    children: React.ReactNode;
};

export const Group: React.FC<CollapsibleProps> = (props) => {
    const { title, collapsible = true } = props;
    const toggle = () => {};

    return (
        <div>
            <button className="flex items-center justify-between w-full focus:outline-none active" type="button" onClick={toggle}>
                <span className="text-md font-bold mb-2">{props.title}</span>
                {collapsible && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 13.535l4.95-4.95 1.414 1.414-6.364 6.364-6.364-6.364 1.414-1.414z" />
                    </svg>
                )}
            </button>
            <div className="accordion-content w-full flex mb-4">{props.children}</div>
        </div>
    );
};
