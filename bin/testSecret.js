/**
 * Created by irisroyalty on 16-12-3.
 */

var process = require("child_process");

function mainTest() {
    var secrets = [
        "tip defense crater attitude soccer weird liquid episode reopen robust subway lunar",
        "chicken puzzle twin hurt ice season fashion tackle garbage any shaft dentist",
        "carbon boil warfare window emotion embody witness gather confirm pole kitten clutch",
        "world genius ankle expand captain thought club cricket clean satisfy exact multiply",
        "abandon olive shoulder inflict window slot toe awkward cradle series lizard feature",
        "else unknown devote huge retreat giant donkey stove dice fat pear ritual",
        "near pig enable arctic sad scrub town choose merge onion join tooth",
        "vital mass sunset bomb ritual voyage zero crush police accuse blade tide",
        "thrive shrug sun below once aisle churn insane meat shallow real tornado",
        "tail chunk nose magnet intact core document item fan crunch good observe",
        "fiber skill deer delay stumble famous ozone clock pave ritual want tone",
        "comfort deposit soul comic slush worth occur icon gadget drift ill juice",
        "scan bitter hard guitar tonight sketch quit camp theory blue donor ball",
        "recycle quiz way coral rocket kick elegant tourist plastic right ozone pizza",
        "equal lawn hurdle ability neutral pause road edge scare taxi immune cook",
        "baby ask tip latin viable sustain always sadness mother story bulb struggle",
        "ticket dismiss upset shop worry circle cushion tape exercise ghost legend decrease",
        "limb item moment school game impulse bulk enforce detect security permit resource",
        "daughter upon situate local eternal diagram desert aim range belt armor kind",
        "crucial define concert amused ritual spawn master put income ask arch foam",
        "receive sock deliver craft siren theory muscle dawn trend company knife kitten",
        "sense rain foot power stay write acid pony hunt cotton heart boss",
        "lava nothing harvest update file wolf small hood hidden dragon medal observe",
        "girl quantum entry panic next local artist food vote chuckle provide ordinary",
        "become poverty actual edge mass glove payment border rare high hamster wheat",
        "harvest flee chicken gloom bronze clip spoil patch maximum clinic fiscal gasp",
        "fantasy marriage lens palm hammer stuff practice mad cup favorite behind mechanic",
        "clerk garlic sight giggle slot cry alcohol mother reform volume mail twist",
        "indoor cost taxi please company always unknown remain face giggle coffee famous",
        "discover market fix devote mass trumpet thunder together bird coconut tip illegal",
        "debris theme sleep mobile purity fetch sword coast black screen link angle",
        "sure attract fence wagon joke slow will luggage hedgehog candy before rib",
        "join often fluid song impose best promote cry invite adjust pottery below",
        "glide beauty drip reflect lesson shed catalog couple enter share awake concert",
        "drip episode woman orphan update ball aware wonder wealth switch amateur cheese",
        "speak term sphere syrup spatial other delay action pulp degree dash deal",
        "lottery sugar praise old rally body menu giraffe video lens noodle fish",
        "hint pilot hand struggle saddle attitude correct monster deal click raccoon ski",
        "forget velvet toss runway oblige slice focus quick apple amused chief lobster",
        "evoke foil online essay anchor absorb exchange stand culture indoor uphold valve",
        "echo baby result world oil target soft film remain sheriff firm banner",
        "shy isolate praise office kitchen erase fossil ribbon shock oval identify clip",
        "north remind attack situate amused craft game patch fatigue oven project audit",
        "spring drink pumpkin since remain clarify vital talent cry crane gap shed",
        "vicious custom pet true celery tongue nurse draft mention begin loud weather",
        "reward letter increase village sheriff near first steel slice describe budget happy",
        "slide tube razor away demise question property original topic apart enter peanut",
        "table fantasy short fetch unhappy boy toast doctor net lounge defy legend",
        "congress toast flip twice game grunt forward another quantum mansion buzz certain",
        "grape border pulse abstract shrug rather dust rubber ceiling hold captain rigid",
        "lamp element expect segment route fall toward width indoor matter daring giraffe",
        "lemon collect motor kiss domain region document flock tonight mixture quality barrel",
        "curious reject wreck purse satisfy ramp donor thumb sunset camp angle taste",
        "urban ranch almost fluid leader panic person cash bid empty marble chest",
        "legend property portion bulk lesson into diary guide hill typical finger spoon",
        "kit mandate allow eternal someone between call expose yellow excess hedgehog morning",
        "imitate life output fresh about hungry oval unveil sausage resemble write ramp",
        "crush blade ritual combine again elder gift limit couple fresh fringe okay",
        "popular attract choose useless scout caught priority picnic august skull measure stool",
        "list orient comfort people buyer asthma view skate update unusual horn tent",
        "venue robust adult behave toilet teach mesh rib machine olympic large double",
        "hollow busy critic glory field casual become grab relief crisp pill route",
        "camp decide notice camp copy jewel frame indicate reason depth income together",
        "unusual quote wave sketch jeans country object castle link manage fortune key",
        "weekend magnet long symptom basic basic weird move embrace danger same together",
        "paddle stick palace pepper detect page trip leaf duty learn exchange rebuild",
        "obscure unaware blast eager swing avocado bridge maid uniform manual evil exile",
        "sadness swift mother mirror license orange drum grant juice uncle tornado major",
        "sorry bag movie dune sock oval volcano all cook decrease arch toy",
        "satoshi elbow inmate denial dawn dirt speed deer indicate affair ivory drift",
        "critic quarter shield sentence solar hard saddle two book canal payment language",
        "beauty slot meat pig disorder expire claim matrix wage spawn chronic vessel",
        "motor boring razor milk brush tragic width baby warfare occur used indoor",
        "final kit choose review maple curious quality hundred pitch globe viable gossip",
        "mule defense myself copy anchor interest refuse execute shock frozen urge mutual",
        "shy toy rate dentist flag fork universe approve recipe blush twice century",
        "slender pottery decrease economy neutral three rib lunch crystal void switch abstract",
        "oblige earth click endorse desk false dish tenant gallery rare obscure sell",
        "glad laptop filter elephant hamster mistake turn habit problem hat dizzy ribbon",
        "table ball point catalog place twelve build mom squeeze lemon trend claim",
        "live cream margin dutch oak choice owner million pond mom certain screen",
        "mechanic dose you teach loyal hurdle charge town pepper program monster critic",
        "problem concert radar narrow outer message annual airport key future thought youth",
        "barely casual unlock token ghost slim spike dirt gasp wisdom learn throw",
        "concert funny race cost cover snap student friend uncle scout left ritual",
        "name what among trigger cross engine identify enable endless old system quality",
        "dolphin soccer patrol comic act visa chase feature clever jelly flash extend",
        "video upper rigid bless square layer brisk bitter address curve level cushion",
        "frequent lava early tooth system arrange traffic elevator first coral sad giraffe",
        "cram bulk piano embark hold suit noble injury allow innocent genius wall",
        "coil december enact snake phone rural box feed gown acid salmon kite",
        "elder twelve desk magic speak element differ long car hip park eyebrow",
        "remind cabbage little behave anxiety prosper tiger decrease meat nothing source frequent",
        "lady edge develop lumber light bright october caution raise present industry vessel",
        "lamp globe soccer bright diary loyal high depend feature chalk cruel popular",
        "west crater sweet legend scale language avocado zebra airport absorb fantasy grain",
        "enlist wood device what adapt cute resemble boost zero unhappy between farm",
        "ranch follow canyon north across nice skirt surface embrace mistake topic true",
        "wisdom waste belt riot jealous luggage cry apple sketch orange lawsuit nut",
        "dawn dignity calm oblige order girl catalog swap amused lunch lunch bench",
        "raise expose potato analyst crew fame adult mixed family island hand custom"
    ];
    secrets.forEach(function(secret) {
        console.log(secret);
        var cmd = "./mcc-cli openaccount ";
        var pipe = process.exec(cmd + secret);
        pipe.stdout.on('data', function (data) {
            if(data) {
                var x = JSON.parse(data);
                console.log(x.address);
            } else {
                console.log("no data");
            }
        });
        pipe.on('exit', function(code){
           // console.log("exit");
        });

    });
}

mainTest();