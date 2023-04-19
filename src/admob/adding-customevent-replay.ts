import { createAddingCustomEventReplySteps } from './adding-customevent-replay-steps';

export function createAddingCustomEventReplyJSON(title:string, tsv: string) {
  const steps: any[] = [];
  const lines = tsv.split('\n');

  lines.forEach((line) => {
    if (line.trim() === '') return; // Skip empty lines

    const [label, ecpm, mappingName, className, parameter] = line.split('\t');

    const steps = createAddingCustomEventReplySteps(
      label.trim(),
      parseFloat(ecpm.trim()),
      mappingName.trim(),
      className.trim(),
      parameter.trim()
    );

    steps.push(...steps);
  });

  return {
    "title":title,
    "steps":steps
  };
}
