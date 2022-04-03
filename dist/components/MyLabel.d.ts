/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     * The label to display
     */
    label: string;
    /**
    * The size of the label
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Whether the label should be all caps
    */
    allCaps?: boolean;
    /**
    * The color of the label
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * custom color of the label
    */
    customFontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, customFontColor }: MyLabelProps) => JSX.Element;
export default MyLabel;
