/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from '../supabase';
import { useState } from 'react';

export function usePushMessage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    const push = async (username: string, message: string) => {
        try {
            setLoading(true);
            const { error } = await supabase.from('send_message').insert({
                username: username,
                message: message,
            });
            if (error) {
                setError(error.message);
            } else {
                setError(null);
            }
        } catch (err: any) {
            setLoading(false);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, error, setDatas: push };
}
