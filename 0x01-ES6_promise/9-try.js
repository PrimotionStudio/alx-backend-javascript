#!/usr/bin/node
export default function guardrail(mathFunction) {
  const maths = [];
  try {
    maths.push(mathFunction());
  } catch (error) {
    maths.push(error.toString());
  } finally {
    maths.push('Guardrail was processed');
  }
  return maths;
}
