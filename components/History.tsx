import Footprint from './Footprint';
import { prompts } from '../utils/prompts';

interface HistoryProps {
  commands: string[];
}

export const History: React.FC<HistoryProps> = ({ commands }) => {
  return (
    <>
      {commands.map((command: string) => {
        return (
          <>
            <Footprint command={command} />
            {prompts(command)}
          </>
        );
      })}
    </>
  );
};

export default History;
