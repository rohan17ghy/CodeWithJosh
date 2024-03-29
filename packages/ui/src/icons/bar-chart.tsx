export const BarChart = ({ className }: {className?: string}):JSX.Element => (
    <svg className={`mr-4 inline ${className}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z" />
        </g>
    </svg>
);
