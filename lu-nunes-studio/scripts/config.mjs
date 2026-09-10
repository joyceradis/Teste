export function buildInput(imageUrl, scenePrompt) {
  return {
    image_url: imageUrl,
    prompt: `Same woman as the reference image, identical face, hair, skin tone and apparent age. Brazilian luxury lifestyle vlog, natural smartphone/mirrorless camera, realistic skin and human motion, no facial morphing, no outfit drift. Scene: ${scenePrompt}`,
    num_frames: 121,
    frames_per_second: 24,
    video_quality: 'high'
  };
}
