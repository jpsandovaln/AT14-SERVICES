import { CommandSchema } from "./CommandSchema";
import { Interpreter } from "./Interpreter";

export class AudioCommands {
    Audioformat  =  new CommandSchema("audioFormat",  "-i ");
    VariousAudioformat  =  new CommandSchema("audioVariousAudioFormat","-i");
    BitRateAudio = new CommandSchema("bitRate", " -i -b:v 2500k -b:a 192k ");
    AudioTracks = new CommandSchema("audioTracks", "  -i -i -filter_complex amerge ");
    FadeOutAudio = new CommandSchema("fadeOutAudio", "-i -vf fade=t=in:st=0:d=5");
    FadeIn = new CommandSchema("fadeInAudio", " -vf fade=t=in:st=0:d=5,fade=t=out:st=25:d=5 ");
    AudioQuality = new CommandSchema("audioQuality", " -aq q ");
    AudioChannels = new CommandSchema("audioChannels", " -ac ");

    interpreter = new Interpreter([
        this.Audioformat,
        this.VariousAudioformat,
        this.BitRateAudio,
        this.AudioTracks,
        this.FadeOutAudio,
        this.FadeIn,
        this.AudioQuality,
        this.AudioChannels,
    ]);
}