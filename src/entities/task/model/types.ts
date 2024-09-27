export type Task = {
    id: number;
    text: string;
    completed: boolean;
};

export type DraggelTask = Task & {
    moveTask: (dragIndex: number, hoverIndex: number) => void;
    index: number;
};
