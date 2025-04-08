import axios from 'axios';

async function qwen(input: string) {
    const response = await axios.post("https://chat.qwen.ai/api/chat/completions", 
        {
            stream: true,
            incremental_output: true,
            chat_type: "t2t",
            model: "qwen-max-latest",
            messages: [{
                role: "user",
                content: input,
                chat_type: "t2t",
                extra: {},
                feature_config: {
                    thinking_enabled: false
                }
            }],
            session_id: "65913ef1-f874-49c3-a55b-7df34aedc6be",
            chat_id: "82f2f7b3-7cb0-4f0e-854f-508ae1a24c97",
            id: "07c9a6ef-4fc1-4421-95a5-0ba650ea5aac"
        },
        {
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,fa;q=0.8",
                "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZkYjljZjAwLWNmNTItNDc5Ny1hNjg0LTIzZDI5NjBjYTg0NCIsImV4cCI6MTc0NjI2Njg2M30.GbcpMvih9Bul9pNiHp25X-FfJZic-T78ERdaWQbGj-U",
                "bx-ua": "231!49v3QAmUXeB+jjsk2k3OrdBjUq/YvqY2leOxacSC80vTPuB9lMZY9mRWFzrwLEkVa1wFtLD+zjulzVfhndyTScQXMkGVcC9byQmtk201ePaqQWYrovREV0wqL2CUPUKzVOkGN8s47podMfj9LFgnfgRmaQC4v6FA24XxeEVbKOAY5YPubzsWeDqB055kK53nca9xsIRNOWFc4mXpkSs0HhZ5a7Sr+MLep4Dqk+8rBXy80lyNUglCok+++4mWYi++6bygj0GGoUBDj+jW+xw6QlGsYKxZDDzPivyxacuh8zJQ955MRwHYOtsaVMF8H3+U/Jy1o+wKbYg0Dzai6qPZ2Mema1GDGZyrdPoUHsMP1lHqZNbHkm44zypkAeXPRxZxBF76kIQbEnABXyb36SlJNJhNEn4vkTXx3gCsoo42Qap58lGPP6ds63IggyYmt94CXL01MsipSRJNEmsAJfgBCN9+GJEsp/8fx0SJy6/zUZE60QE/xJp84ckUEPoKir/OtI3IaRWR+A3+VEF63yyA1r70amr2++tNUcePOAmc/gJYtB5IgiSJxG2lqJe2ykwC6po/ucUt49aAohX9dgmmhsTEdsiq/Cq1/M767UY6iTg8yi6fz71ANdlemyo7m9GkGa3MWseltFcXeBS0tZDzI02iNtaUlntYfOcPe2oqoknkSZj5Fohz1cwL3VZzBBYYpwM0vEQr47kdPej5MsrgaJV/nMzUz/dJsN6tnEAAYdAYJIJm3BDvnT5ZXrXWxFVfrlWwjjqhhiSjJI9SddG1pWbsTVg6st5dfMSLQDGrU/Zqom3RVUDFM9halrdk9eih4c3Qixm9aLWebIVolL3ZGfOgRaj7LDRI5CQV+RiluRmeVn7nnmeAwFprvKiYiZO0N/b/G4/9kbiKD7z2/4XWfkUxnQO8HUTPi7W8yx2toRYWGQqLaUb/e0FojUZ9Kgdp7aLBcn4dUT/s+Ve8f14UsqDILBrectk11hH/6naidI9Q64RYULxWkHCIZD08EoI7Gq+CAKKsG7Fpb0+B4iTXFVnkmD9nq2pnbDzYp1uoPkJLBVFOExJz+dGpNUxqSCeee5OcuwfDxfUDhBBM4Mk9132y1stjsf3A4SFI9zUOrzuE4iKsfGmTKxWSyaPYDJxsYX+njljhQ+r2RMODeDck7AsDS9M2oCptdbC90CuXhr0qUBt5C7v0SQD9XEV3uOd5ll6+vQvbsjnkdEUXIUviRl+iRxhGNx5KwmCh6Bvj0tAWz7h44i7k12NskUG/pzSUKRW97RbCjFiq5G/Ga3NrW4/CZSaFE6YCmTbdIXhmr1UHX47cTNjb94435e8gO8WITbn8qRvK8h0q0CoEgwRExs4ZR5s661VFfbP8mjWVENtr1d9bSegNeelVWZjHUjQIXZd+N/q+oPxD7I9IEJE+3JEoj1Jb9Iy7f9u/jddUCltiQGaNhf0/lDI4MrUXe3jmKTU2hGWvw8yetzgbB30olLfFtOF1V2dXXsM3D5nnoT1A0JA=",
                "bx-umidtoken": "T2gAIZlNKCUJMXHD6UUrzv6c9IbdBguwBfK-kIZ7BFTNZrbRcKPL2RmzRwjzEd6tT4E=",
                "bx-v": "2.5.28",
                "content-type": "application/json",
                "priority": "u=1, i",
                "sec-ch-ua": "\"Chromium\";v=\"130\", \"Google Chrome\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "source": "web",
                "x-accel-buffering": "no",
                "x-request-id": "a9223f04-2455-49b5-8ba1-688f80d13aaa",
                "cookie": "_gcl_au=1.1.1992040749.1743674843; cna=4Et1IKjFsFwCAbzVq5tybITH; _bl_uid=Ftmy59h91g462dzz9g6qv4gn3Fg2; cnaui=6db9cf00-cf52-4797-a684-23d2960ca844; aui=6db9cf00-cf52-4797-a684-23d2960ca844; x-ap=eu-central-1; sca=36f53635; xlly_s=1; acw_tc=0a03e56417440473269668925e4e63f190cff0736460c97af97e8729b42c1e; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZkYjljZjAwLWNmNTItNDc5Ny1hNjg0LTIzZDI5NjBjYTg0NCIsImV4cCI6MTc0NjYzOTMyOH0.AkHpzYBDyAKTflwO3XtoTnmSxlf5qnVNZktJGV11dS0; atpsida=eb0f79689e19aa1c4baaf279_1744047332_1; SERVERID=39f9b97601af82c20ca6545d128ba49a|1744047682|1744047326; ssxmod_itna=YqxQD5GKY57IqCqYQiQdi=DuD+rxp6YaDQKGHDyg6xQ5DODLxnRDGdco6pWiooPoi8QB0wxpGir5D/ACEm5DUPqiaDIfnQ3Pnx0KYPUi24uxiFmjOqU3N0=xusqWKjGRScTsG=HvKxCPDExpipCioDeeDtx0rD0eDPxDYDG4DoxPDngxDjxDdrzEIktoDbxi3G4GCDUbEA4DFzeg+E3xD0xD8DtR3WFDDBaG0Pj0hQG3Dex7fzQ4I=Gj7r4G1LD0HH71xr8McOH0vYq67Ifn+Dl9gDC9IRzgYniOAC88oql9Zpjci9LWq=DhxChzijZ1xYCx+0PXjpIWD3CG4emKGKMEqZa4DDao7D5M45EDH3xSFHMDPWGHhn2PjTdXToe4Pz0PY0xb4V9xxx4HYbqFGYX04/oieAr3GDD; ssxmod_itna2=YqxQD5GKY57IqCqYQiQdi=DuD+rxp6YaDQKGHDyg6xQ5DODLxnRDGdco6pWiooPoi8QB0wxpGiEeDAt4gBhxDFEHhAiGDGN3H+zhRne7Te1Dyeq0F1Mnd7klPRxL504hdpcW3jDMjc28AGXlgDDjEG/8Yf743fK7iLf+h+DM+4j3mdVKM6/YYfX4ji33mUOQTfK8AX1Du2awEiRmMrN1W9K3Q=RBe2oxPyjDmQED3rG1QjhEGT75khHNKN5rk7ChZd82Knf8A=ZFlU4HGtZmd9WH1D3m8b9XadYCWz3h+czA92dvnUH1j67DPR0PXpYPrx8x0yopqnKcepPYjixI1odsjdEmE3K=IPpfjU4mp4oLUcIK=otcIqD6OD6Kmpd0b3P6eYLsa0HKUmgI2QEWELRjAicIxYNCaAblAKKY1Wp4xhNSGm6We=6vKaPrGdxUdDaRDxHzI6/pU/r0bIZW+4AWQeIsGA4QG4AdIrvcID9EpeB0PiydAdx656QUnna6CDBzGR1haPHbEp6Cx1Gn4A9bQe10qsDmbEf/8g3kewWDxD; isg=BA8PVyPEtPLj-7AUTK4VTCvqnqMZNGNWpAulqSEcLn6F8C3yIAbJpxqm8zjOsDvO; tfstk=g8bmGvOCwi-jVwBKHT8bxhAsCZE-ljT6xO39BFpa4LJ5kOEXBgYNT9x9bosAEj_lKV3Yho1ZSFLapJULJsGX5FypjdsqqxOpOdz9bqzylCQZw3hUJs1jag1NjsaKIq8l51JNQn-yaCpy_qRNQUuysLu2_qRZU7A6UFuq7FzraCdHQVRVQ_Pk1LJw7nk90oJf7a7zFE5pQZKnYiRDmp52nOBfz7-qcspo7V7lcnvUJL0Z7aAcwqpnP2q9LM9vvp6zyqYGaCXkvi2noOfNOG-lSxPAL1WfrET3XSth4gIpmg2qSLQvsH8wqfuNZFS2bNYU8YA54sINltci7I_AJhvBq5u6XU7pYMWm1W1yuCW6ANeIlK5NOwsp-rDBig5HrgWo4DWWWVt3hMmsfnRWZpHFdHAeAu5Qi7VoY5t2NI9LZ7msfnRWZpFuZDz60QOXp",
                "Referer": "https://chat.qwen.ai/",
                "Referrer-Policy": "no-referrer-when-downgrade"
            },
            timeout: 40000, // 40 seconds timeout
            timeoutErrorMessage: "Request to Qwen API timed out",
            responseType: 'stream'
        }
    );
    let fullContent = '';
    
    return new Promise((resolve, reject) => {
        response.data.on('data', (chunk: Buffer) => {
            const lines = chunk.toString().split('\n');
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const jsonData = JSON.parse(line.slice(6));
                        const content = jsonData.choices[0].delta.content;
                        if (content) {
                            fullContent += content;
                        }
                    } catch (error) {
                        // Skip invalid JSON lines
                    }
                }
            }
        });

        response.data.on('end', () => {
            resolve(fullContent);
        });

        response.data.on('error', (error: Error) => {
            reject(error);
        });
    });
    // return response.data;
}

export default qwen;