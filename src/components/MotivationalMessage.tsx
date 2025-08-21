interface MotivationalMessageProps{
    message: string;
    author: string;
}

export function MotivationalMessage(props: MotivationalMessageProps) {
    return(
        <div style={{ border: '1px solid #ccc', padding: "1rem" }}>
            <h1>{props.message}</h1>
            <h3>{props.author}</h3>
        </div>
    )
}

