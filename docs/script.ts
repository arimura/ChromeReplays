const tsvInput = document.getElementById('tsvInput') as HTMLTextAreaElement;
const generateJsonButton = document.getElementById('generateJsonButton') as HTMLButtonElement;
const jsonOutput = document.getElementById('jsonOutput') as HTMLElement;

function tsvToJson(tsv: string): string {
  // Replace this with your TSV to JSON conversion logic
  return JSON.stringify({ tsv: tsv }, null, 2);
}

generateJsonButton.addEventListener('click', () => {
  const tsv = tsvInput.value;
  const json = tsvToJson(tsv);
  jsonOutput.textContent = json;
});
