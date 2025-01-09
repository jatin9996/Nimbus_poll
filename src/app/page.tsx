import { redirect } from "next/navigation";

// amplifyConfig.js
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';

Amplify.configure(outputs);

export default function RootPage() {
  redirect('/en');
}
