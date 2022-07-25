import Footprint from './Footprint';
import { prompts } from '../utils/prompts';
import { Command } from '../types/command';

interface HistoryProps {
  commands: Command[];
}

export const History: React.FC<HistoryProps> = ({ commands }) => {
  return (
    <>
      {commands.map((command: Command) => {
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
