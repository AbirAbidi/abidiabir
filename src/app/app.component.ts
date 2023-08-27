import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MyServiceService } from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isScrollHidden = false; // Initially hide the div

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    // Check if the page has been scrolled
    if (window.scrollY > 0) {
      this.isScrollHidden = true; // Hide the div
    } else {
      this.isScrollHidden = false; // Show the div
    }
  }

 /* constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
    });
  }*/
 

  showIcon = window.innerWidth <618 ;
  isDrawerOpen: boolean = false ;
  mainClass : string ='main';
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
    this.mainClass = this.isDrawerOpen ? 'main opened' : 'main';

  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 618) {
      this.showIcon = true;
    }else {
      this.showIcon = false;
      this.isDrawerOpen = false; // Close the drawer when screen size is larger
      this.mainClass = 'main'; 
    }
  }
  title = 'MyPortfolio';
  courses = [
    {
      'title':'FrontEnd',
      'images':[
        'assets/frontend/pngwing.com.png',
        'assets/frontend/pngegg.png',
        'assets/frontend/pngegg (3).png',
        'assets/frontend/pngegg (2).png',
        'assets/frontend/pngegg (1).png',
      ]
      },
  {
    'title':'BackEnd',
    'images':[
        'assets/backend/pngwing.com.png',
        'assets/backend/pngwing.com (1).png',
        'assets/backend/pngaaa.com-2459500.png',
        'assets/backend/mysql.png'
    ]
    },
  {
    'title':'Embedded Dev',
    'images':[
        'assets/emb/logo.png',
        'assets/emb/pngwing.com.png',
        'assets/emb/pngwing.com (2).png',
        'assets/emb/pngwing.com (1).png'
    ]
  },
  {
    'title':'Other Shit',
    'images':[
        'assets/other/pngwing.com.png',
        'assets/other/pngwing.com (3).png',
        'assets/other/pngwing.com (2).png',
        'assets/other/pngwing.com (1).png'
    ]
  }
 
  
  ]
  @ViewChild('clickSound') clickSoundRef!: ElementRef;

  playClickSound(): void {
    const clickSound = this.clickSoundRef.nativeElement as HTMLAudioElement;
    clickSound.currentTime = 0; // Rewind the sound to the beginning
    clickSound.play();

  }
  textArray :string[]=[
    "Embbedded systems Student",
    "Robotic enthusiast",
    "Web and mobile developer",
    "Mafia movie lover"
  ]
  currentIndex: number = 0;
  currentText: string = '';
/*constructor(){}*/
  ngOnInit(): void {
    this.animateText();
  }

  animateText() {
    const text = this.textArray[this.currentIndex];
    let index = 0;
    const interval = setInterval(() => {
      this.currentText = text.substring(0, index);
      index++;
      if (index > text.length) {
        clearInterval(interval);
        setTimeout(() => this.eraseText(text), 1000);
      }
    }, 100);
  }
  eraseText(text: string) {
    let index = text.length;
    const interval = setInterval(() => {
      this.currentText = text.substring(0, index);
      index--;
      if (index <= 0) {
        clearInterval(interval);
        this.currentIndex = (this.currentIndex + 1) % this.textArray.length;
        setTimeout(() => this.animateText(), 1000);
      }
    }, 50);
  }
constructor(private myService :MyServiceService){}
send(){
  this.myService.sendEmail()
}
}
