import * as responses from './responses';

export const prompts = (command: string) => {
  switch (command) {
    case 'help':
      return responses.helpMenu();
    case 'linkedin':
    case 'li':
      return responses.redirectPrompt('linkedin');
    case 'parcel':
      return responses.redirectPrompt('parcel');
    case 'ong':
      return responses.redirectPrompt('know your meme fr fr');
    case 'mgk':
      return responses.spotify(command);
    default:
      return responses.commandNotFound(command);
  }
};
