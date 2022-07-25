import { useFolderContext } from '../contexts/FolderContext';
import { Command } from '../types/command';
import * as responses from './responses';

export const prompts = (command: Command) => {
  const { setFolder } = useFolderContext();
  console.log(command);
  const args = command.name.split(' ');
  console.log(args);
  switch (args[0]) {
    case 'help':
      return responses.helpMenu();
    case 'linkedin':
    case 'li':
      return responses.redirectPrompt('linkedin');
    case 'parcel':
      return responses.redirectPrompt('parcel');
    case 'ong':
      return responses.redirectPrompt('know your meme');
    case 'mgk':
      return responses.spotify(command.name);
    case 'ls':
      return responses.list(command.folder);
    case 'cd':
      if (args[1]) {
        return setFolder(args[1]);
      } else {
        return responses.needArg();
      }
    case 'about':
      return responses.comingSoon();
    default:
      return responses.commandNotFound(command.name);
  }
};
