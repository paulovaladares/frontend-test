module.exports = function( grunt ){
	grunt.initConfig({

		uglify : {
		    options : {
		        mangle : false
		    },
		    my_target : {
		        files : {
		            'public/javascripts/main.js' : [ 'public/_js/script.js' ]
		        }
		    }
		}, // uglify

		compass: {               
	    	dist: {                   
	      		options: {  
	        		config: 'config.rb'  
	      		}
	    	}	
	  	},//compass

	    watch : {
      		dist : {
        		files : [
          			'public/_js/**/*',
          			'public/sass/**/*'
        		],
        		tasks : [ 'uglify', 'compass' ]
      		}	
    	} // watch	
	});

	// Plugins do Grunt
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-contrib-compass');
  	grunt.loadNpmTasks( 'grunt-contrib-watch' );

  	
  	// Tarefas que serão executadas
  	grunt.registerTask( 'default', ['uglify' ,'compass' ] );

    // Tarefa para ficar rodando gunt  - grunt watch
  	grunt.registerTask( 'w', [ 'watch' ] );
}