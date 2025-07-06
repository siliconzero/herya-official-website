import { sendMeSchema } from '@/lib/schemas/sendme-schema';
import { usePushMessage } from '@/lib/vendors/supabase/hooks/use-push-message';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

type TSendme = z.infer<typeof sendMeSchema>;

export function useSendForm() {
    const form = useForm<TSendme>({
        resolver: zodResolver(sendMeSchema),
    });
    const { loading, error, setDatas } = usePushMessage();
    const handleSend = async (values: TSendme) => {
        setDatas(values.username, values.message);
        if (error) {
            toast.error(error);
        } else {
            toast.success('Pesan telah terkirim!');
        }
    };

    return { form, handleSend, loading, error };
}
