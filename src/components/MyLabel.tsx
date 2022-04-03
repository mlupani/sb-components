import './MyLabel.css'
import { CustomFontColor } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
    /**
     * The label to display
     */
    label: string,
    /**
    * The size of the label
    */
    size?: 'normal'|'h1'|'h2'|'h3',
    /**
    * Whether the label should be all caps
    */
    allCaps?: boolean,
    /**
    * The color of the label
    */
    color?: 'primary'|'secondary'|'tertiary'
    /**
    * custom color of the label
    */
    customFontColor?: string
}

export const MyLabel = ({label='No Label', size='normal', allCaps = true, color='primary', customFontColor = ''}: MyLabelProps) => {
  return (
    <span style={{color: customFontColor}} className={`label ${size} ${!customFontColor ? 'text-'+color : ''} `}>
        {
            allCaps ? label.toUpperCase() : label
        }
    </span>
  )
}


export default MyLabel