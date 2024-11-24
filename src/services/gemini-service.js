import {GoogleGenerativeAI} from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({model: 'gemini-1.5-flash'});

export default async function generateImageDescriptionWithGemini(imageBuffer) {
  const prompt =
    'Generate a description for the following image. I need only the text, no special or escape characters, no backslash, for the description because it will be added as a string to the content.';

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString('base64'),
        mimeType: 'image/png',
      },
    };
    const res = await model.generateContent([prompt, image]);
    return res.response.text() || 'Alt-text unavailable.';
  } catch (erro) {
    console.error('Error getting a description:', erro.message, erro);
    throw new Error('Error getting Gemini description.');
  }
}
