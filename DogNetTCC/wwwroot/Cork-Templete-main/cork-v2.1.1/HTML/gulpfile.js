// Requires the gulp plugin
var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

// Requires the browser-sync plugin
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hi! Its Cork Admin. If you are reading this. It means you have successfully installed task manager and gulp.');
});

console.log('\x1b[32m', 'Cork Admin Template v2.1.0');

/*
	=====================================================================
	=====================================================================
	|																	|
	|	@include ->  Writing GULP-SASS Functions For All Demos 			|
	|																	|
	=====================================================================
	=====================================================================
*/


/*
	===============
		Demo 1
	===============
*/

/* ===== LTR ===== */

gulp.task('demo1:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/collapsible-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/collapsible-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo1:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/collapsible-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/collapsible-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo1-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/collapsible-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/collapsible-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo1-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/collapsible-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/collapsible-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 2 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo2:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/collapsible-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/collapsible-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo2:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/collapsible-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/collapsible-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo2-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/collapsible-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/collapsible-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo2-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/collapsible-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/collapsible-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	===============
		Demo 3
	===============
*/

/* ===== LTR ===== */

gulp.task('demo3:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/vertical-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/vertical-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo3:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/vertical-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/vertical-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo3-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/vertical-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/vertical-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo3-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/vertical-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/vertical-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/*
	==================
		Demo 4 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo4:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/vertical-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/vertical-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo4:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/vertical-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/vertical-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo4-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/vertical-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/vertical-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo4-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/vertical-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/vertical-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 5 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo5:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/vertical-semi-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/vertical-semi-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo5:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/vertical-semi-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/vertical-semi-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo5-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/vertical-semi-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/vertical-semi-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo5-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/vertical-semi-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/vertical-semi-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 6 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo6:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/web-app/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/web-app/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo6:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/web-app/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/web-app/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo6-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/web-app/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/web-app/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo6-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/web-app/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/web-app/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/*
	==================
		Demo 7 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo7:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/horizontal-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/horizontal-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo7:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/horizontal-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/horizontal-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo7-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/horizontal-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/horizontal-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo7-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/horizontal-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/horizontal-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 8 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo8:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/horizontal-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/horizontal-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo8:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/horizontal-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/horizontal-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo8-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/horizontal-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/horizontal-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo8-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/horizontal-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/horizontal-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 9 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo9:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/compact-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/compact-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo9:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/compact-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/compact-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo9-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/compact-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/compact-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo9-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/compact-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/compact-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 10 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo10:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/saas-app/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/saas-app/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo10:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/saas-app/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/saas-app/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo10-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/saas-app/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/saas-app/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo10-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/saas-app/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/saas-app/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 11 
	==================
*/

/* ===== LTR ===== */

// Light

gulp.task('demo11:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/enterprise-admin/sass-light/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/enterprise-admin/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo11:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/enterprise-admin/sass-light/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/enterprise-admin/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


// Dark

gulp.task('demo11-dark:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/enterprise-admin/sass-dark/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/enterprise-admin/dark/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo11-dark:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/enterprise-admin/sass-dark/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/enterprise-admin/dark/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

// Light

gulp.task('demo11-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/enterprise-admin/sass-light/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/enterprise-admin/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo11-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/enterprise-admin/sass-light/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/enterprise-admin/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


// Dark

gulp.task('demo11-rtl-dark:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/enterprise-admin/sass-dark/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/enterprise-admin/dark/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo11-rtl-dark:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/enterprise-admin/sass-dark/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/enterprise-admin/dark/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 12 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo12:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/crm-admin/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/crm-admin/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo12:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/crm-admin/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/crm-admin/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo12-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/crm-admin/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/crm-admin/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo12-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/crm-admin/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/crm-admin/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})





/*
	==================
		Demo 13 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo13:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/horizontal-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/horizontal-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo13:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/horizontal-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/horizontal-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo13-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/horizontal-light-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/horizontal-light-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo13-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/horizontal-light-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/horizontal-light-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 14 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo14:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/horizontal-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/horizontal-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo14:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/horizontal-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/horizontal-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo14-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/horizontal-dark-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/horizontal-dark-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo14-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/horizontal-dark-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/horizontal-dark-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})


/*
	==================
		Demo 15 
	==================
*/

/* ===== LTR ===== */

gulp.task('demo15:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('ltr/trendy-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('ltr/trendy-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo15:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('ltr/trendy-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in ltr/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('ltr/trendy-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/* ===== RTL ===== */

gulp.task('demo15-rtl:sass:assets', function() {
	console.log('Command executed successfully compiling SCSS in assets.');
	 return gulp.src('rtl/trendy-menu/sass/assets/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
	    .pipe(sass())
	    .pipe(gulp.dest('rtl/trendy-menu/assets/css'))
	    .pipe(browserSync.reload({
	      stream: true
	}))
})

gulp.task('demo15-rtl:sass:plugins', function() {
	console.log('Command executed successfully compiling SCSS in plugin.');
  return gulp.src('rtl/trendy-menu/sass/plugins/**/*.scss') // Gets all files ending with .scss in rtl/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('rtl/trendy-menu/plugins/'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

/*
	=====================================================================
	=====================================================================
	|																	|
	|	@include ->  Writing WATCH Functions For All Demos 				|
	|																	|
	=====================================================================
	=====================================================================
*/


/*
	===============
		Demo 1
	===============
*/

/* ===== LTR ===== */

gulp.task('watch:demo1',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/collapsible-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/collapsible-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/collapsible-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/collapsible-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/collapsible-dark-menu/**/*.scss', gulp.series('demo1:sass:assets', 'demo1:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo1-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/collapsible-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/collapsible-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/collapsible-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/collapsible-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/collapsible-dark-menu/**/*.scss', gulp.series('demo1-rtl:sass:assets', 'demo1-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 2
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo2',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/collapsible-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/collapsible-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/collapsible-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/collapsible-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/collapsible-light-menu/**/*.scss', gulp.series('demo2:sass:assets', 'demo2:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo2-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/collapsible-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/collapsible-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/collapsible-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/collapsible-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/collapsible-light-menu/**/*.scss', gulp.series('demo2-rtl:sass:assets', 'demo2-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/*
	===============
		Demo 3
	===============
*/

/* ===== LTR ===== */

gulp.task('watch:demo3',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/vertical-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/vertical-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/vertical-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/vertical-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/vertical-dark-menu/**/*.scss', gulp.series('demo3:sass:assets', 'demo3:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo3-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/vertical-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/vertical-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/vertical-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/vertical-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/vertical-dark-menu/**/*.scss', gulp.series('demo3-rtl:sass:assets', 'demo3-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 4
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo4',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/vertical-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/vertical-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/vertical-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/vertical-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/vertical-light-menu/**/*.scss', gulp.series('demo4:sass:assets', 'demo4:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo4-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/vertical-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/vertical-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/vertical-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/vertical-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/vertical-light-menu/**/*.scss', gulp.series('demo4-rtl:sass:assets', 'demo4-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 5
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo5',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/vertical-semi-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/vertical-semi-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/vertical-semi-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/vertical-semi-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/vertical-semi-dark-menu/**/*.scss', gulp.series('demo5:sass:assets', 'demo5:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo5-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/vertical-semi-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/vertical-semi-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/vertical-semi-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/vertical-semi-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/vertical-semi-dark-menu/**/*.scss', gulp.series('demo5-rtl:sass:assets', 'demo5-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 6
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo6',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/web-app'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/web-app');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/web-app/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/web-app/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/web-app/**/*.scss', gulp.series('demo6:sass:assets', 'demo6:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo6-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/web-app'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/web-app');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/web-app/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/web-app/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/web-app/**/*.scss', gulp.series('demo6-rtl:sass:assets', 'demo6-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 7
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo7',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/horizontal-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/horizontal-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/horizontal-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/horizontal-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/horizontal-light-menu/**/*.scss', gulp.series('demo7:sass:assets', 'demo7:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo7-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/horizontal-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/horizontal-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/horizontal-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/horizontal-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/horizontal-light-menu/**/*.scss', gulp.series('demo7-rtl:sass:assets', 'demo7-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/*
	==================
		Demo 8
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo8',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/horizontal-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/horizontal-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/horizontal-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/horizontal-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/horizontal-dark-menu/**/*.scss', gulp.series('demo8:sass:assets', 'demo8:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo8-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/horizontal-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/horizontal-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/horizontal-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/horizontal-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/horizontal-dark-menu/**/*.scss', gulp.series('demo8-rtl:sass:assets', 'demo8-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/*
	==================
		Demo 9
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo9',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/compact-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/compact-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/compact-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/compact-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/compact-menu/**/*.scss', gulp.series('demo9:sass:assets', 'demo9:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo9-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/compact-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/compact-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/compact-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/compact-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/compact-menu/**/*.scss', gulp.series('demo9-rtl:sass:assets', 'demo9-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 10
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo10',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/saas-app'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/saas-app');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/saas-app/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/saas-app/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/saas-app/**/*.scss', gulp.series('demo10:sass:assets', 'demo10:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));

/* ===== RTL ===== */

gulp.task('watch:demo10-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/saas-app'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/saas-app');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/saas-app/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/saas-app/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/saas-app/**/*.scss', gulp.series('demo10-rtl:sass:assets', 'demo10-rtl:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/*
	==================
		Demo 11
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo11',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/enterprise-admin'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/enterprise-admin');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/enterprise-admin/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/enterprise-admin/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/enterprise-admin/**/*.scss', gulp.series('demo11:sass:assets', 'demo11:sass:plugins', 'demo11-dark:sass:assets', 'demo11-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/* ===== RTL ===== */

gulp.task('watch:demo11-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/enterprise-admin'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/enterprise-admin');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/enterprise-admin/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/enterprise-admin/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/enterprise-admin/**/*.scss', gulp.series('demo11-rtl:sass:assets', 'demo11-rtl:sass:plugins', 'demo11-rtl-dark:sass:assets', 'demo11-rtl-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));




/*
	==================
		Demo 12
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo12',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/crm-admin'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/crm-admin');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/crm-admin/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/crm-admin/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/crm-admin/**/*.scss', gulp.series('demo11:sass:assets', 'demo11:sass:plugins', 'demo11-dark:sass:assets', 'demo11-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/* ===== RTL ===== */

gulp.task('watch:demo12-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/crm-admin'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/crm-admin');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/crm-admin/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/crm-admin/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/crm-admin/**/*.scss', gulp.series('demo11-rtl:sass:assets', 'demo11-rtl:sass:plugins', 'demo11-rtl-dark:sass:assets', 'demo11-rtl-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));




/*
	==================
		Demo 13
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo13',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/modern-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/modern-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/modern-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/modern-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/modern-light-menu/**/*.scss', gulp.series('demo13:sass:assets', 'demo13:sass:plugins', 'demo13-dark:sass:assets', 'demo13-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/* ===== RTL ===== */

gulp.task('watch:demo13-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/modern-light-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/modern-light-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/modern-light-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/modern-light-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/modern-light-menu/**/*.scss', gulp.series('demo13-rtl:sass:assets', 'demo13-rtl:sass:plugins', 'demo13-rtl-dark:sass:assets', 'demo13-rtl-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));




/*
	==================
		Demo 14
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo14',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/modern-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/modern-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/modern-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/modern-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/modern-dark-menu/**/*.scss', gulp.series('demo14:sass:assets', 'demo14:sass:plugins', 'demo14-dark:sass:assets', 'demo14-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/* ===== RTL ===== */

gulp.task('watch:demo14-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/modern-dark-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/modern-dark-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/modern-dark-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/modern-dark-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/modern-dark-menu/**/*.scss', gulp.series('demo14-rtl:sass:assets', 'demo14-rtl:sass:plugins', 'demo14-rtl-dark:sass:assets', 'demo14-rtl-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));



/*
	==================
		Demo 15
	==================
*/

/* ===== LTR ===== */

gulp.task('watch:demo15',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'ltr/trendy-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('ltr/trendy-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('ltr/trendy-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('ltr/trendy-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('ltr/trendy-menu/**/*.scss', gulp.series('demo15:sass:assets', 'demo15:sass:plugins', 'demo15-dark:sass:assets', 'demo15-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));


/* ===== RTL ===== */

gulp.task('watch:demo15-rtl',  gulp.series(function() {

	console.log('Executing Watch Function');

	browserSync.init({
	    server: {
	      baseDir: 'rtl/trendy-menu'
	    },
	})

	// Watch : - HTML

	var html = gulp.watch('rtl/trendy-menu');
	html.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.html");
	})

	// Watch : - JS

	var js = gulp.watch('rtl/trendy-menu/**/*.js');
	  js.on('change', function(path, stats) {
	    browserSync.notify("Compiling, please wait!");
	    browserSync.reload("*.js");
	})
	

	// Watch : - CSS

	// @Note: - If you are working with CSS ( not SCSS ) but want to work with gulp for fast pace 
	// then, uncomment the code below 


	// var css = gulp.watch('rtl/trendy-menu/**/*.css');
	// css.on('change', function(path, stats) {
	//     browserSync.notify("Injecting CSS!");
	//     browserSync.reload("*.css");
	// })


	// Watch : - SCSS

	var scss = gulp.watch('rtl/trendy-menu/**/*.scss', gulp.series('demo15-rtl:sass:assets', 'demo15-rtl:sass:plugins', 'demo15-rtl-dark:sass:assets', 'demo15-rtl-dark:sass:plugins'));
	scss.on('change', function(path, stats) {
	    browserSync.notify("Injecting SCSS!");
	    browserSync.reload("*.scss");
	})

}));